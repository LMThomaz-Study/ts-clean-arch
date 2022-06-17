import { RouteInMemoryRepository } from '../infra/db/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe('CreateRouteUseCase Tests', () => {
  it('Should crate a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute({
      title: 'Test',
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
    });
    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: 'Test',
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
      points: [],
    });
  });
});
