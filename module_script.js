const harry = 'potter';
const voldemort = 'he who must be no named';

export function jump() {
	return 'jump function';
}

export default function figth( char1, char2 ) {
	const attack1 = Math.floor(Math.random() * char1.length);
	const attack2 = Math.floor(Math.random() * char2.length);

	return attack1 > attack2 ? `${chart1} wins` : `${char2} wins`;
}