export const storage = {
  baseKey: String(import.meta.env.STORAGE_KEY),
  key(name: string) {
    return `${this.baseKey}@${name}`
  }
}
