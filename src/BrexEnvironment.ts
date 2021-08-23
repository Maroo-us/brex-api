export enum BrexEnvironment {
  Staging = 'staging',
  Production = 'production',
}

export function getBaseUrl(env: BrexEnvironment): string {
  return environmentMap[env]
}

const productionBaseUrl = 'https://platform.brexapis.com'
const stagingBaseUrl = 'https://platform.staging.brexapps.com'

const environmentMap: Record<BrexEnvironment, string> = {
  [BrexEnvironment.Production]: productionBaseUrl,
  [BrexEnvironment.Staging]: stagingBaseUrl,
}
