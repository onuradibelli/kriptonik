// Squarified Treemap Algorithm (Bruls, Huizing, van Wijk)
// Mathematically optimal squarified rectangle tessellation with aspect ratios close to 1:1

export interface TreemapInputItem {
  id: string;
  weight: number; // e.g. marketCapUsd or volume24hUsd
  [key: string]: any;
}

export interface TreemapRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TreemapNode<T = any> extends TreemapRect {
  data: T;
  area: number;
}

export function computeSquarifiedTreemap<T extends TreemapInputItem>(
  items: T[],
  bounds: TreemapRect
): TreemapNode<T>[] {
  if (!items || items.length === 0) return [];

  const totalWeight = items.reduce((sum, item) => sum + Math.max(0.00001, item.weight || 0), 0);
  const totalArea = bounds.width * bounds.height;
  if (totalArea <= 0 || totalWeight <= 0) return [];

  // Sort descending by weight and normalize area
  const normalized = items
    .filter((item) => (item.weight || 0) > 0)
    .map((item) => ({
      data: item,
      area: (Math.max(0.00001, item.weight) / totalWeight) * totalArea
    }))
    .sort((a, b) => b.area - a.area);

  if (normalized.length === 0) return [];

  const currentRect = { ...bounds };
  const results: TreemapNode<T>[] = [];
  let row: { data: T; area: number }[] = [];

  function worst(rowItems: { area: number }[], w: number): number {
    let s = 0;
    let minArea = Infinity;
    let maxArea = -Infinity;
    for (const r of rowItems) {
      s += r.area;
      if (r.area < minArea) minArea = r.area;
      if (r.area > maxArea) maxArea = r.area;
    }
    if (minArea <= 0 || s <= 0 || w <= 0) return Infinity;
    const w2 = w * w;
    const s2 = s * s;
    return Math.max((w2 * maxArea) / s2, s2 / (w2 * minArea));
  }

  function layoutRow(rowItems: { data: T; area: number }[], w: number, rect: TreemapRect) {
    if (rowItems.length === 0 || w <= 0) return;
    const isHorizontal = rect.width >= rect.height;
    const rowArea = rowItems.reduce((s, r) => s + r.area, 0);
    const rowThickness = rowArea / w;
    let offset = 0;

    for (const item of rowItems) {
      const itemLength = item.area / rowThickness;
      if (isHorizontal) {
        results.push({
          data: item.data,
          area: item.area,
          x: rect.x,
          y: rect.y + offset,
          width: Math.max(0, rowThickness),
          height: Math.max(0, itemLength)
        });
      } else {
        results.push({
          data: item.data,
          area: item.area,
          x: rect.x + offset,
          y: rect.y,
          width: Math.max(0, itemLength),
          height: Math.max(0, rowThickness)
        });
      }
      offset += itemLength;
    }

    if (isHorizontal) {
      rect.x += rowThickness;
      rect.width = Math.max(0, rect.width - rowThickness);
    } else {
      rect.y += rowThickness;
      rect.height = Math.max(0, rect.height - rowThickness);
    }
  }

  for (let i = 0; i < normalized.length; i++) {
    const item = normalized[i];
    const shorter = Math.min(currentRect.width, currentRect.height);

    if (row.length === 0) {
      row.push(item);
    } else {
      const currentWorst = worst(row, shorter);
      const nextWorst = worst([...row, item], shorter);
      if (nextWorst <= currentWorst) {
        row.push(item);
      } else {
        layoutRow(row, shorter, currentRect);
        row = [item];
      }
    }
  }

  if (row.length > 0) {
    const shorter = Math.min(currentRect.width, currentRect.height);
    layoutRow(row, shorter, currentRect);
  }

  return results;
}
