const dotenv = require('dotenv');
const { exec } = require('child_process');
const path = require('path');

// Cargar solo las variables del archivo .env
const envPath = path.resolve(__dirname, '.env');
const envConfig = dotenv.config({ path: envPath }).parsed;

if (!envConfig) {
  console.error('No se pudieron cargar las variables del archivo .env');
  process.exit(1);
}

// Construir el comando para configurar las variables en Firebase
const configSetCommand = Object.keys(envConfig)
  .map((key) => `myconfig.${key.toLowerCase()}="${envConfig[key]}"`)
  .join(' ');

// Ejecutar el comando para configurar las variables
exec(`firebase functions:config:set ${configSetCommand}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al configurar variables: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Variables configuradas exitosamente:\n${stdout}`);
});