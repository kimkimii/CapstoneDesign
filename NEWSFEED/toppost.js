function toggleFilterOptions() {
    var filterOptions = document.getElementById('filterOptions');
    filterOptions.style.display = (filterOptions.style.display === 'block') ? 'none' : 'block';
  }

  // Close the filter options when clicking outside the filter container
  document.addEventListener('click', function(event) {
    var filterContainer = document.querySelector('.filter-container');
    var filterOptions = document.getElementById('filterOptions');
    if (event.target !== filterContainer && !filterContainer.contains(event.target)) {
      filterOptions.style.display = 'none';
    }
  });