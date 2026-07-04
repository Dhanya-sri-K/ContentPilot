import { Global, Module } from '@nestjs/common';
import { HeygenProvider } from '@gitroom/nestjs-libraries/3rdparties/heygen/heygen.provider';
import { ReelFarmProvider } from '@gitroom/nestjs-libraries/3rdparties/reelfarm/reelfarm.provider';
import { ElevenLabsProvider } from '@gitroom/nestjs-libraries/3rdparties/elevenlabs/elevenlabs.provider';
import { ClaudeCodeProvider } from '@gitroom/nestjs-libraries/3rdparties/claudecode/claudecode.provider';
import { KeycloakProvider } from '@gitroom/nestjs-libraries/3rdparties/keycloak/keycloak.provider';
import { ThirdPartyManager } from '@gitroom/nestjs-libraries/3rdparties/thirdparty.manager';

@Global()
@Module({
  providers: [
    HeygenProvider,
    ReelFarmProvider,
    ElevenLabsProvider,
    ClaudeCodeProvider,
    KeycloakProvider,
    ThirdPartyManager,
  ],
  get exports() {
    return this.providers;
  },
})
export class ThirdPartyModule {}
