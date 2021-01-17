export function findLastNumericIndex(server, modelNamePlural = 'games') {
  let result;
  const BreakException = {};

  try {
    server.db[modelNamePlural]
      .toArray()
      .reverse()
      .forEach((record) => {
        if (Number.isInteger(record.id)) {
          result = record.id;
          throw BreakException;
        } else {
          const numericId = parseInt(record.id, 10);

          if (!isNaN(numericId)) {
            result = numericId;
            throw BreakException;
          }
        }
      });
  } catch (e) {
    if (e !== BreakException) {
      throw e;
    }
  }

  return result == null ? 1 : result + 1;
}

export default function gamesScenario(server, count = 10) {
  const start = findLastNumericIndex(server);

  Array(count)
    .fill(null)
    .forEach((_e, i) => {
      // prettier-ignore
      server.create('game', {
        id: start + i,
        aka:         (i) => `aka ${i + 1}`,
        battery:     (i) => false,
        description: (i) => `description ${i + 1}`,
        gif:         (i) => `gif ${i + 1}`,
        is_default:  (i) => false,
        language:    (i) => `eng`,
        mapper:      (i) => '100',
        mp4:         (i) => `mp4 ${i + 1}`,
        name:        (i) => `name ${i + 1}`,
        screenshot:  (i) => `screenshot ${i + 1}`,
        size:        (i) => 128,
        tag:         (i) => null,
        webm:        (i) => `webm ${i + 1}`,
      })
    });
}
