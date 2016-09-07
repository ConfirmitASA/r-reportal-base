import ReportalBase from '../reportal-base';

describe('ReportalBase.getQueryVariable', () => {
  const query = "key1=val1&key2=val2";
  it('should return first key from query', () => {
    const val1 = ReportalBase.getQueryVariable('key1',query);
    expect(val1).toBe('val1');
  });
  it('should return second key from query', () => {
    const val2 = ReportalBase.getQueryVariable('key2',query);
    expect(val2).toBe('val2');
  });
  it('should return null because key is not in query', () => {
    const val3 = ReportalBase.getQueryVariable('key3',query);
    expect(val3).toBe(null);
  });
  it('should return null because query is null', () => {
    const val4 = ReportalBase.getQueryVariable('key3');
    expect(val4).toBe(null);
  });
});

describe('ReportalBase.isNumber', () => {
  it('should return null for empty string', () => {
    expect(ReportalBase.isNumber("")).toBe(null);
  });
  it('should return int', () => {
    expect(ReportalBase.isNumber("1")).toBe(1);
  });
  it('should return float', () => {
    expect(ReportalBase.isNumber("1.3")).toBe(1.3);
  });
  it('should remove thousand delimiter (comma)', () => {
    expect(ReportalBase.isNumber("1,300")).toBe(1300);
  });
  it('should return string if not a number', () => {
    expect(ReportalBase.isNumber("string")).toBe("string");
  });
});

describe('ReportalBase.newEvent', () => {
  const newEvent = ReportalBase.newEvent('new-event');
  it('is an Event', () => {
    let inst = newEvent instanceof Event;
    expect(inst).toBeTruthy();
  });
  it('is of "new-event" type', () => {
    expect(newEvent.type).toBe("new-event");
  });
  it('can bubble', () => {
    expect(newEvent.bubbles).toBeTruthy();
  });
  it('is cancelable', () => {
    expect(newEvent.cancelable).toBeTruthy();
  });
});
