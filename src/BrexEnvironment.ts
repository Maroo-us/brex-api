export enum BrexEnvironment {
  Staging = 'staging',
  Production = 'production',
}

export function getBaseUrl(env: BrexEnvironment): string {
  return baseUrlMap[env]
}

const productionBaseUrl = 'https://platform.brexapis.com'
const stagingBaseUrl = 'https://platform.staging.brexapps.com'

const baseUrlMap: Record<BrexEnvironment, string> = {
  [BrexEnvironment.Production]: productionBaseUrl,
  [BrexEnvironment.Staging]: stagingBaseUrl,
}
