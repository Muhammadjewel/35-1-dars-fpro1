var elsToggleButton = document.querySelectorAll('.team-member__toggle');

elsToggleButton.forEach(function (button) {
  button.addEventListener('click', function () {
    button.closest('.team-member__card').classList.toggle('team-member__card--rotated');
  });
});
