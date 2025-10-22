document.addEventListener("DOMContentLoaded", function() {
  const dateTimeElement = document.getElementById("dateTime");

  function updateDateTime() {
    const now = new Date();

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };

    dateTimeElement.textContent = now.toLocaleString('en-US', options);
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
