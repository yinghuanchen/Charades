export default function ProgressCountdown(timeleft) {
    return new Promise((resolve, reject) => {
        const countdownTimer = setInterval(() => {
            timeleft--;

            document.getElementById('progressBar').value = timeleft;
            if (timeleft <= 0) {
                clearInterval(countdownTimer);
                resolve(true);
            }
        }, 1000);
    });
}