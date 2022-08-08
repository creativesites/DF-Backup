import { asyncForEach } from 'sequential-async-foreach';

await asyncForEach([1, 2, 3], async (number) => {
    await doTheAsyncThings(number);
});
