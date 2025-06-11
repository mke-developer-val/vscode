import { Nav } from '@fluentui/react';
import { View } from '../../layout/layout';

export const WelcomeView = () => {
	return (
		<View title='Val - Code Tools'>
			<Nav
				groups={[
					{
						links: [
							{ name: 'Val - Code Standup (Redmond)', url: 'https://vscode-standup.azurewebsites.net', icon: 'JoinOnlineMeeting', target: '_blank' },
							{ name: 'Val - Code Standup (Zurich)', url: 'https://stand.azurewebsites.net/', icon: 'JoinOnlineMeeting', target: '_blank' },
							{ name: 'Val - Code Errors', url: 'https://errors.code.visualstudio.com', icon: 'ErrorBadge', target: '_blank' },
						]
					}
				]}>
			</Nav>
		</View>
	);
}
