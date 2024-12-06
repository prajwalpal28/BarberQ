export function rotateArray(arr, rotation) {
    const normalizedRotation = ((rotation % arr.length) + arr.length) % arr.length;
    return [...arr.slice(normalizedRotation), ...arr.slice(0, normalizedRotation)];
  }
  
  