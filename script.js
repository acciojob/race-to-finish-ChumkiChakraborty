window.promises = [];

// Create a simple promise that resolves after a random time between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = Math.random() * 4000 + 1000; // Random time between 1 and 5 seconds
    setTimeout(() => {
      resolve(`Resolved in ${Math.round(randomTime)} ms`);
    }, randomTime);
  });
  
  window.promises.push(promise); // Add promise to the array
}

// Use Promise.any() to get the first resolved promise
Promise.any(window.promises)
  .then((result) => {
    document.getElementById('output').textContent = result; // Display result in the output div
  });
