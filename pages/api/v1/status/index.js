import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  // versão do PostgreSQL
  const versionResult = await database.query("SHOW server_version;");
  const postgresVersion = versionResult.rows[0].server_version;

  //  máximo de conexões
  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnections = parseInt(maxConnectionsResult.rows[0].max_connections);

  // conexões ativas
  const databaseName = process.env.POSTGRES_DB;
  const activeConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const activeConnections = await activeConnectionsResult.rows[0].count;

  const statusInfo = {
    updated_at: updatedAt,
    version_bd: postgresVersion,
    maxConnections_bd: maxConnections,
    activeConnections_bd: activeConnections,
  };

  console.log(statusInfo);
  response.status(200).json(statusInfo);
}

export default status;
