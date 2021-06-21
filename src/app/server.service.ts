export class ServersService{
    servers = [
        {
          type: 'server',
          name: 'rahul',
          content: 'pampara vaazha',
          created_on: new Date(1997, 5, 14),
        },
        {
          type: 'blueprint',
          name: 'Development Server',
          created_on: new Date(2020, 1, 15),
          content: 'i7  with 2000gigs of RAM',
        },
        {
          type: 'server',
          name: 'Main server',
          created_on: new Date(2019, 0, 15),
          content: 'i9+ Overclocked with ssd',
        },
      ];
    
      onServerAdded(serverData: { serverName: string; serverContent: string }) {
        this.servers.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent,
          created_on: new Date(2021,1,15),
        });
      }
    
      onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
        this.servers.push({
          type: 'blueprint',
          name: serverData.serverName,
          content: serverData.serverContent,
          created_on: new Date(2021,4,22),
        });
      }
    
      destroyFirst() {
        this.servers.splice(0, 1);
      }
}