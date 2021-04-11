// gtreeting messages:

const greetings = ['hey', 'welcome', 'hey', 'whazzup', 'howdy', 'what\'s up', 'yo'];

export const displayGreeting = () => {
	const len = greetings.length;
	const random = Math.floor(Math.random() * len);
	const currGreeting = greetings[random][0].toUpperCase() + greetings[random].slice(1) + ', ';
	return currGreeting;
}