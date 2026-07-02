import { rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

try {
  rmSync('.next', { recursive: true, force: true });
} catch {
  // If Windows keeps a cache file locked, continue and let Next reuse the folder.
}

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const result = spawnSync(npmCommand, ['run', '_build'], {
  stdio: 'inherit',
  env: process.env
});

process.exit(result.status ?? 1);
