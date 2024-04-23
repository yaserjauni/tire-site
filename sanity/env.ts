export const apiVersion =
  process.env.SANITY_STUDIO_SANITY_API_VERSION || '2024-04-05'

export const dataset = "production"

export const projectId = "n3n36w76"
export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
