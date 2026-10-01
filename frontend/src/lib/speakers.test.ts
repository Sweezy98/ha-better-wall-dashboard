import { describe, expect, it } from 'vitest';
import { formatLayout, layoutChannels, parseLayout, sourceChannels, speakerStates } from './speakers';

const cinema = parseLayout('7.4.4')!;
const active = (states: Record<string, string>) =>
  Object.keys(states)
    .filter(channel => states[channel] === 'active')
    .sort();

describe('speakers', () => {
  it('adds front wides for nine at ear height', () => {
    expect(layoutChannels(parseLayout('9.4.6')!)).toContain('FWL');
    expect(layoutChannels(parseLayout('9.4.6')!)).toHaveLength(19);
  });

  it('reads a layout, rounding to one it can draw', () => {
    expect(cinema).toEqual({ bed: 7, subs: 4, heights: 4 });
    expect(parseLayout('5.1')).toEqual({ bed: 5, subs: 1, heights: 0 });
    expect(parseLayout('6.1.3')).toEqual({ bed: 5, subs: 1, heights: 2 });
    expect(parseLayout('')).toBeNull();
    expect(parseLayout('surround')).toBeNull();
    expect(layoutChannels(cinema)).toHaveLength(15);
  });

  it('fills every speaker for an upmixer or an object format', () => {
    for (const mode of ['Dolby Atmos', 'DTS:X', 'DOLBY D+ +DS', 'PCM + NEURAL:X', 'Dolby Surround', 'MULTI CH STEREO']) {
      expect(active(speakerStates(cinema, { on: true, mode }))).toHaveLength(15);
    }
  });

  it('plays stereo from the front pair, the subwoofers silent', () => {
    expect(active(speakerStates(cinema, { on: true, mode: 'Stereo' }))).toEqual(['FL', 'FR']);
  });

  it('plays a decoded source on its own channels, the subwoofers only with an LFE', () => {
    expect(active(speakerStates(cinema, { on: true, mode: 'DOLBY DIGITAL', format: '3/2/.1' }))).toEqual(
      ['C', 'FL', 'FR', 'SL', 'SR', 'SW1', 'SW2', 'SW3', 'SW4'].sort()
    );
    expect(active(speakerStates(cinema, { on: true, mode: 'Direct', format: '2/0/.0' }))).toEqual(['FL', 'FR']);
    expect(active(speakerStates(cinema, { on: true, mode: 'MULTI CH IN 7.1' }))).toContain('SBL');
  });

  it('plays the source channels for a mode it cannot read, when the format is known', () => {
    expect(active(speakerStates(cinema, { on: true, mode: 'Movie', format: '3/2/.1' }))).toContain('SL');
    expect(active(speakerStates(cinema, { on: true, mode: 'Movie', format: '3/2/.1' }))).not.toContain('SBL');
  });

  it('writes a source format as a layout', () => {
    expect(formatLayout('3/4/.1')).toBe('7.1');
    expect(formatLayout('2/0/.0')).toBe('2.0');
    expect(formatLayout('3/4/.1/4')).toBe('7.1.4');
    expect(formatLayout('PCM')).toBe('PCM');
    expect(formatLayout('/ /.0')).toBeUndefined();
    expect(formatLayout(undefined)).toBeUndefined();
  });

  it('says unknown rather than guess, and silent while off', () => {
    expect(new Set(Object.values(speakerStates(cinema, { on: true, mode: 'Movie' })))).toEqual(new Set(['unknown']));
    expect(new Set(Object.values(speakerStates(cinema, { on: true, mode: 'DTS' })))).toEqual(new Set(['unknown']));
    expect(new Set(Object.values(speakerStates(cinema, { on: false, mode: 'Dolby Atmos' })))).toEqual(new Set(['unpowered']));
  });

  it('shows a subwoofer whose outlet is off as unpowered, each on its own', () => {
    const states = speakerStates(cinema, { on: true, mode: 'Dolby Atmos' }, ['SW3']);
    expect(states.SW3).toBe('unpowered');
    expect(states.SW4).toBe('active');
    expect(speakerStates(cinema, { on: false }, ['SW1']).SW1).toBe('unpowered');
  });

  it('plays a source centre from the front pair when there is no centre', () => {
    expect(active(speakerStates(parseLayout('2.0')!, { on: true, mode: 'DOLBY DIGITAL', format: '1/0/.0' }))).toEqual(['FL', 'FR']);
  });

  it("reads a source's channels from either way of writing them", () => {
    expect(sourceChannels('3/4/.1')).toEqual({ front: 3, surround: 4, lfe: 1, heights: 0 });
    expect(sourceChannels(undefined, '7.1.4')).toEqual({ front: 3, surround: 4, lfe: 1, heights: 4 });
    expect(sourceChannels('2.0')).toEqual({ front: 2, surround: 0, lfe: 0, heights: 0 });
    expect(sourceChannels('PCM')).toBeNull();
  });
});
