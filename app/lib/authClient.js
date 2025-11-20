export function getAuth() {
if (typeof window === 'undefined') return null;
const user = localStorage.getItem('authUser');
return user ? JSON.parse(user) : null;
}


export function register({ email, password }) {
if (typeof window === 'undefined') return;
const raw = localStorage.getItem('users');
const users = raw ? JSON.parse(raw) : [];


if (users.find(u => u.email === email)) {
throw new Error('User already exists');
}


const user = { id: Date.now(), email, password };
users.push(user);
localStorage.setItem('users', JSON.stringify(users));


const token = 'demo-token-' + Date.now();
localStorage.setItem('authToken', token);
localStorage.setItem('authUser', JSON.stringify({ id: user.id, email: user.email }));


return { user, token };
}


export function login({ email, password }) {
if (typeof window === 'undefined') return;
const raw = localStorage.getItem('users');
const users = raw ? JSON.parse(raw) : [];


const user = users.find(u => u.email === email && u.password === password);
if (!user) throw new Error('Invalid credentials');


const token = 'demo-token-' + Date.now();
localStorage.setItem('authToken', token);
localStorage.setItem('authUser', JSON.stringify({ id: user.id, email: user.email }));


return { user: { id: user.id, email: user.email }, token };
}


export function logout() {
if (typeof window === 'undefined') return;
localStorage.removeItem('authToken');
localStorage.removeItem('authUser');
}