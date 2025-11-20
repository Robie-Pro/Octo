async function start() {
  await writeLine("Hello Robie", 50);
  await writeLine("Loading Octo penetration software", 50);
  sleep(75);
  await loadingPercent("Loading ", 30);
  await writeLine("Loaded successfully", 50);
  await writeLine("Initializing Octo", 50);
  await sleep(100);
  await clear();
}
async function starthack() {
  await writeLine("Enter target ID", 50);
  await sleep(100);
  await promptPassword("ID: ", iD);
  await writeLine(`Target ID: ${iD}`, 50);
}
var ID = iD;

async function loop() {
  await start();
  await starthack();
}
loop();
