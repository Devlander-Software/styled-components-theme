export function videoTimeStampToSeconds(str) {
    const p = str.split(':');
    let s = 0, m = 1;
    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    return s;
}
//# sourceMappingURL=video-timestamp-to-seconds.js.map