import {
  ThirdParty,
  ThirdPartyAbstract,
} from '@gitroom/nestjs-libraries/3rdparties/thirdparty.interface';

@ThirdParty({
  identifier: 'elevenlabs',
  title: 'ElevenLabs',
  description: 'Generate realistic AI voices and speech from text.',
  position: 'media',
  fields: [],
})
export class ElevenLabsProvider extends ThirdPartyAbstract {
  async checkConnection(
    apiKey: string
  ): Promise<false | { name: string; username: string; id: string }> {
    if (!apiKey) return false;
    try {
      const res = await fetch('https://api.elevenlabs.io/v1/user', {
        headers: {
          'xi-api-key': apiKey,
        },
      });
      if (!res.ok) return false;
      const data = await res.json();
      return {
        name: 'ElevenLabs',
        username: data.subscription?.tier || 'elevenlabs',
        id: apiKey.slice(-8),
      };
    } catch {
      return {
        name: 'ElevenLabs',
        username: 'elevenlabs',
        id: apiKey.slice(-8),
      };
    }
  }

  async sendData(apiKey: string, data: any): Promise<string> {
    const voiceId = data.voice || '21m00Tcm4TlvDq8ikWAM';
    const text = data.text || 'Hello from ElevenLabs';
    
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_monolingual_v1',
      }),
    });

    if (!res.ok) {
      throw new Error('ElevenLabs generation failed');
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    return 'data:audio/mpeg;base64,' + buffer.toString('base64');
  }
}
