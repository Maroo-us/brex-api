export enum BrexEnvironment {
  Staging = 'staging',
  Production = 'production',
}

export function getBaseUrl(env: BrexEnvironment): string {
  return baseUrlMap[env]
}

export function getAuthTokenUrl(env: BrexEnvironment): string {
  return authTokenUrlMap[env]
}

const productionBaseUrl = 'https://platform.brexapis.com'
const stagingBaseUrl = 'https://platform.staging.brexapps.com'

const productionAuthTokenUrl = 'https://accounts.brex.com/oauth2/v1/token'
const stagingAuthTokenUrl =
  'https://accounts.staging.brexapps.com/oauth2/v1/token'

const baseUrlMap: Record<BrexEnvironment, string> = {
  [BrexEnvironment.Production]: productionBaseUrl,
  [BrexEnvironment.Staging]: stagingBaseUrl,
}

const authTokenUrlMap: Record<BrexEnvironment, string> = {
  [BrexEnvironment.Production]: productionAuthTokenUrl,
  [BrexEnvironment.Staging]: stagingAuthTokenUrl,
}
