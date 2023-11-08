// Helper function to determine orientation
function getOrientationForWeb(): 'portrait' | 'landscape' {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return height > width ? 'portrait' : 'landscape';
}

// Function to calculate responsive font size based on the viewport width or height percentage
export function RFPercentageForWeb(percent: number): number {
  const orientation = getOrientationForWeb();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const base = orientation === 'portrait' ? viewportHeight : viewportWidth;

  const heightPercent = (percent * base) / 100;
  return Math.round(heightPercent);
}

// Function to calculate responsive font size based on viewport height in relation to standard screen height
export function RFValueForWeb(
  fontSize: number,
  standardScreenHeight: number = 680
): number {
  const orientation = getOrientationForWeb();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const base = orientation === 'portrait' ? viewportHeight : viewportWidth;

  const heightPercent = (fontSize * base) / standardScreenHeight;
  return Math.round(heightPercent);
}
