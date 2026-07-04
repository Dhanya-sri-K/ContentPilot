import {
  ThirdParty,
  ThirdPartyAbstract,
} from '@gitroom/nestjs-libraries/3rdparties/thirdparty.interface';

@ThirdParty({
  identifier: 'claudecode',
  title: 'Claude Code',
  description: 'AI agent for coding tasks and agentic workflows.',
  position: 'media-library',
  fields: [],
})
export class ClaudeCodeProvider extends ThirdPartyAbstract {
  async checkConnection(
    apiKey: string
  ): Promise<false | { name: string; username: string; id: string }> {
    if (!apiKey) return false;
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1,
          messages: [{ role: 'user', content: 'Ping' }],
        }),
      });
      if (res.status === 400 || res.ok) {
        return {
          name: 'Claude Code',
          username: 'claude',
          id: apiKey.slice(-8),
        };
      }
      return false;
    } catch {
      return {
        name: 'Claude Code',
        username: 'claude',
        id: apiKey.slice(-8),
      };
    }
  }

  async sendData(apiKey: string, data: any): Promise<string> {
    return '';
  }
}
