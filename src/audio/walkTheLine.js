// Recreates the opening boom-chicka-boom of Johnny Cash's "I Walk the Line"
// Luther Perkins' iconic muted guitar style in F major

let audioCtx = null;

function getContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// Create a plucked guitar-like tone
function pluck(ctx, freq, startTime, duration, volume = 0.15, dest) {
  const osc = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  // Mix of triangle + sawtooth for warm guitar timbre
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, startTime);

  osc2.type = 'sawtooth';
  osc2.frequency.setValueAtTime(freq, startTime);

  // Low-pass filter for warmth
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1200, startTime);
  filter.Q.setValueAtTime(1, startTime);

  // Quick attack, natural decay (pluck envelope)
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  const merge = ctx.createGain();
  merge.gain.setValueAtTime(1, startTime);

  osc.connect(merge);
  osc2.connect(merge);
  // Sawtooth much quieter for just a bit of edge
  const sawGain = ctx.createGain();
  sawGain.gain.setValueAtTime(0.15, startTime);
  osc2.disconnect();
  osc2.connect(sawGain);
  sawGain.connect(merge);

  merge.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  osc.start(startTime);
  osc2.start(startTime);
  osc.stop(startTime + duration + 0.05);
  osc2.stop(startTime + duration + 0.05);
}

// Muted percussive "chicka" sound
function chicka(ctx, startTime, dest) {
  const bufferSize = ctx.sampleRate * 0.06;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 8);
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(800, startTime);
  filter.Q.setValueAtTime(2, startTime);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.08, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.05);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  source.start(startTime);
}

// Bass note (low boom)
function boom(ctx, freq, startTime, dest) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, startTime);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(400, startTime);

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.2, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  osc.start(startTime);
  osc.stop(startTime + 0.6);
}

export function playWalkTheLine() {
  try {
    const ctx = getContext();
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.7, ctx.currentTime);
    masterGain.connect(ctx.destination);

    // Add a touch of reverb-like delay
    const delay = ctx.createDelay();
    delay.delayTime.setValueAtTime(0.08, ctx.currentTime);
    const delayGain = ctx.createGain();
    delayGain.gain.setValueAtTime(0.15, ctx.currentTime);
    delay.connect(delayGain);
    delayGain.connect(masterGain);

    const dryWet = ctx.createGain();
    dryWet.gain.setValueAtTime(1, ctx.currentTime);
    dryWet.connect(masterGain);
    dryWet.connect(delay);

    const t = ctx.currentTime + 0.1;
    const tempo = 0.22; // spacing between beats

    // F major notes
    const F2 = 87.31;
    const F3 = 174.61;
    const A3 = 220.00;
    const C4 = 261.63;
    const F4 = 349.23;

    // === BOOM-chicka-BOOM-chicka pattern (2 bars) ===

    // Bar 1
    // Beat 1: BOOM (bass F)
    boom(ctx, F2, t, dryWet);
    pluck(ctx, F3, t, 0.4, 0.12, dryWet);
    pluck(ctx, A3, t + 0.005, 0.35, 0.08, dryWet);
    pluck(ctx, C4, t + 0.01, 0.35, 0.08, dryWet);

    // Beat 2: chicka (muted)
    chicka(ctx, t + tempo, dryWet);

    // Beat 3: BOOM
    boom(ctx, F2, t + tempo * 2, dryWet);
    pluck(ctx, F3, t + tempo * 2, 0.35, 0.10, dryWet);
    pluck(ctx, C4, t + tempo * 2 + 0.005, 0.3, 0.07, dryWet);

    // Beat 4: chicka
    chicka(ctx, t + tempo * 3, dryWet);

    // Bar 2
    // Beat 1: BOOM with full chord
    boom(ctx, F2, t + tempo * 4, dryWet);
    pluck(ctx, F3, t + tempo * 4, 0.5, 0.13, dryWet);
    pluck(ctx, A3, t + tempo * 4 + 0.005, 0.45, 0.09, dryWet);
    pluck(ctx, C4, t + tempo * 4 + 0.01, 0.45, 0.09, dryWet);
    pluck(ctx, F4, t + tempo * 4 + 0.015, 0.4, 0.06, dryWet);

    // Beat 2: chicka
    chicka(ctx, t + tempo * 5, dryWet);

    // Beat 3: BOOM
    boom(ctx, F2, t + tempo * 6, dryWet);
    pluck(ctx, F3, t + tempo * 6, 0.4, 0.10, dryWet);
    pluck(ctx, A3, t + tempo * 6 + 0.005, 0.35, 0.07, dryWet);

    // Beat 4: chicka
    chicka(ctx, t + tempo * 7, dryWet);

    // Final resolving chord - let it ring
    const end = t + tempo * 8;
    boom(ctx, F2, end, dryWet);
    pluck(ctx, F3, end, 1.2, 0.14, dryWet);
    pluck(ctx, A3, end + 0.01, 1.1, 0.10, dryWet);
    pluck(ctx, C4, end + 0.02, 1.0, 0.10, dryWet);
    pluck(ctx, F4, end + 0.03, 0.9, 0.07, dryWet);

    // Fade out master
    masterGain.gain.setValueAtTime(0.7, end + 0.8);
    masterGain.gain.exponentialRampToValueAtTime(0.001, end + 2.0);
  } catch (e) {
    // Silently fail if audio isn't available
    console.warn('Audio not available:', e);
  }
}
