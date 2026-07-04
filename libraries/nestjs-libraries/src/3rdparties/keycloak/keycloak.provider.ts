import {
  ThirdParty,
  ThirdPartyAbstract,
} from '@gitroom/nestjs-libraries/3rdparties/thirdparty.interface';

@ThirdParty({
  identifier: 'keycloak',
  title: 'Keycloak',
  description: 'Open-source Identity and Access Management for modern applications.',
  position: 'webhook',
  fields: [],
})
export class KeycloakProvider extends ThirdPartyAbstract {
  async checkConnection(
    apiKey: string
  ): Promise<false | { name: string; username: string; id: string }> {
    if (!apiKey) return false;
    return {
      name: 'Keycloak',
      username: 'keycloak_admin',
      id: apiKey.slice(-8),
    };
  }

  async sendData(apiKey: string, data: any): Promise<string> {
    return '';
  }
}
