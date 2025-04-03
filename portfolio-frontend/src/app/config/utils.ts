// src/app/config/utils.ts

/**
 * Helper function for displaying texts
 * Returns the text if it exists and is not empty
 * Returns null if the text is empty or does not exist
 */
export function displayIfExists(text: string | undefined | null): string | null {
    if (text === undefined || text === null || text === '') {
      return null;
    }
    return text;
  }