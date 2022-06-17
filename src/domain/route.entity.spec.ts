import { Route, RouteProps, LatLng } from './route.entity';

describe('Route Tests', () => {
  test('constructor', () => {
    let routeProps: RouteProps = {
      title: 'Test',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    let route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: 'Test',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 4, lng: 5 }],
    };
    route = new Route(routeProps);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 4, lng: 5 }],
    });
  });
  test('updateTitle method', () => {
    const routeProps: RouteProps = {
      title: 'Test',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    route.updateTitle('Title Updated');
    expect(route.title).toBe('Title Updated');
  });
  test('updatePosition method', () => {
    const routeProps: RouteProps = {
      title: 'Test',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 4, lng: 5 };
    const endPosition: LatLng = { lat: 6, lng: 7 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });
  test('updatePoints method', () => {
    const routeProps: RouteProps = {
      title: 'Test',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    const points: LatLng[] = [{ lat: 4, lng: 5 }];
    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points);
  });
});
