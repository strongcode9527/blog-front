export default function formatTime(time) {
    const date = new Date(time);
    return `${date.getFullYear()}:${date.getMonth() + 1}:${date.getDate()}`
}