/**
 * Realistic tactile mechanical click sound effects
 * Audio files are stored in /audio/ (public/audio/menu-open.wav & public/audio/menu-close.wav)
 * so they are downloadable with the project files.
 */

// Cached Audio elements
let openAudioEl: HTMLAudioElement | null = null;
let closeAudioEl: HTMLAudioElement | null = null;

if (typeof window !== 'undefined') {
  try {
    openAudioEl = new Audio('/audio/menu-open.wav');
    closeAudioEl = new Audio('/audio/menu-close.wav');
    openAudioEl.volume = 0.85;
    closeAudioEl.volume = 0.8;
    openAudioEl.preload = 'auto';
    closeAudioEl.preload = 'auto';
  } catch {
    // Ignore audio initialization errors
  }
}

let audioCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

/**
 * Synthesizes an authentic mechanical tactile button click
 */
const synthesizeTactileClick = (baseFreq = 2000, duration = 0.025) => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Layer 1: Sharp pitch-dropped switch click impulse
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.35, now + duration);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);

    // Layer 2: Tactile contact noise burst (friction tick)
    const bufferSize = Math.floor(ctx.sampleRate * 0.008);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(baseFreq * 1.2, now);
    filter.Q.setValueAtTime(2.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.008);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.008);
  } catch {
    // Graceful fallback
  }
};

/**
 * Play realistic menu open click sound (crisp tactile switch press)
 */
export const playMenuOpenSound = (): void => {
  try {
    if (openAudioEl) {
      openAudioEl.currentTime = 0;
      const playPromise = openAudioEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          synthesizeTactileClick(2100, 0.025);
        });
      }
      return;
    }
  } catch {
    synthesizeTactileClick(2100, 0.025);
    return;
  }
  synthesizeTactileClick(2100, 0.025);
};

/**
 * Play realistic menu close click sound (softer tactile switch release)
 */
export const playMenuCloseSound = (): void => {
  try {
    if (closeAudioEl) {
      closeAudioEl.currentTime = 0;
      const playPromise = closeAudioEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          synthesizeTactileClick(1500, 0.02);
        });
      }
      return;
    }
  } catch {
    synthesizeTactileClick(1500, 0.02);
    return;
  }
  synthesizeTactileClick(1500, 0.02);
};
