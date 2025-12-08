test("GET to /api/v1/status returns 200 and correct body", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const body = await response.json();

  // teste updated_at
  expect(body.updated_at).toBeDefined();
  const parsedUpdatedAt = new Date(body.updated_at).toISOString();
  expect(body.updated_at).toEqual(parsedUpdatedAt);

  // teste versão do PostgreSQL
  expect(body.version_bd).toBeDefined();
  expect(typeof body.version_bd).toBe("string");
  expect(body.version_bd).toMatch(/\d+\.\d+/);

  // número máximo de conexões
  expect(body.maxConnections_bd).toBeDefined();
  expect(typeof body.maxConnections_bd).toBe("number");
  expect(body.maxConnections_bd).toBeGreaterThan(0);

  // número de conexões ativas
  expect(body.activeConnections_bd).toBeDefined();
  expect(typeof body.activeConnections_bd).toBe("number");
  expect(body.activeConnections_bd).toEqual(1);
});
