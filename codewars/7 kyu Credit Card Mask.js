function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }

    const masked = '#'.repeat(cc.length - 4);
    const last4 = cc.slice(-4);

    return masked + last4;
}