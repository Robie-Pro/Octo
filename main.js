async function start() {
  await writeLine("Hello Robie", 50);
  await writeLine("Loading Octo penetration software", 50);
  sleep(75);
  await loadingPercent("Loading ", 30);
  await writeLine("Loaded successfully", 50);
  await writeLine("Initializing Octo", 50);
  await sleep(100);
  await clear();
  await hack0();
}

async function hack0() {
  await writeLine("Enter target ID", 50);

  promptPassword("ID: ", async (idValue) => {
    await writeLine(`Target ID: ${idValue}`, 50);
  });
}

start();
