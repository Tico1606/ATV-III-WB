import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ClientList = () => {
  // Estados para listas de clientes e serviços
  const [activeTab, setActiveTab] = useState('clients');
  const [clients, setClients] = useState([
    { id: 1, nome: 'João Silva', telefone: '(11) 99999-9999', email: 'joao@email.com', genero: 'M' },
    { id: 2, nome: 'Maria Santos', telefone: '(11) 88888-8888', email: 'maria@email.com', genero: 'F' },
  ]);

  const [services, setServices] = useState([
    { id: 1, nome: 'Corte de Cabelo', valor: 50.00 },
    { id: 2, nome: 'Manicure', valor: 30.00 },
    { id: 3, nome: 'Design de Sobrancelhas', valor: 40.00 },
  ]);

  // Estados para formulários
  const [newClient, setNewClient] = useState({
    nome: '',
    telefone: '',
    email: '',
    genero: ''
  });

  const [newService, setNewService] = useState({
    nome: '',
    valor: ''
  });

  // Handlers para formulários
  const handleClientChange = (e) => {
    setNewClient({
      ...newClient,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (e) => {
    setNewService({
      ...newService,
      [e.target.name]: e.target.value
    });
  };

  // Handlers para submissão
  const handleClientSubmit = (e) => {
    e.preventDefault();
    if (!newClient.nome || !newClient.email) return;
    
    setClients([
      ...clients,
      {
        ...newClient,
        id: clients.length + 1
      }
    ]);
    
    setNewClient({
      nome: '',
      telefone: '',
      email: '',
      genero: ''
    });
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    if (!newService.nome || !newService.valor) return;
    
    setServices([
      ...services,
      {
        ...newService,
        id: services.length + 1,
        valor: parseFloat(newService.valor)
      }
    ]);
    
    setNewService({
      nome: '',
      valor: ''
    });
  };

  // Componente de Formulário de Cliente
  const ClientForm = () => (
    <form onSubmit={handleClientSubmit} className="space-y-4">
      <Input
        placeholder="Nome"
        name="nome"
        value={newClient.nome}
        onChange={handleClientChange}
        className="w-full p-3 border border-gray-300 rounded"
      />
      <Input
        placeholder="Telefone"
        name="telefone"
        value={newClient.telefone}
        onChange={handleClientChange}
        className="w-full p-3 border border-gray-300 rounded"
      />
      <Input
        placeholder="Email"
        name="email"
        value={newClient.email}
        onChange={handleClientChange}
        className="w-full p-3 border border-gray-300 rounded"
      />
      <select
        name="genero"
        value={newClient.genero}
        onChange={handleClientChange}
        className="w-full p-3 border border-gray-300 rounded"
      >
        <option value="">Selecione o Gênero</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
      </select>
      <Button type="submit" className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Cadastrar Cliente
      </Button>
    </form>
  );

  // Componente de Formulário de Serviço
  const ServiceForm = () => (
    <form onSubmit={handleServiceSubmit} className="space-y-4">
      <Input
        placeholder="Nome do Serviço"
        name="nome"
        value={newService.nome}
        onChange={handleServiceChange}
        className="w-full p-3 border border-gray-300 rounded"
      />
      <Input
        type="number"
        placeholder="Valor"
        name="valor"
        value={newService.valor}
        onChange={handleServiceChange}
        className="w-full p-3 border border-gray-300 rounded"
      />
      <Button type="submit" className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Cadastrar Serviço
      </Button>
    </form>
  );

  // Componente de Lista de Clientes
  const ClientListComponent = () => (
    clients.map(client => (
      <Card key={client.id} className="mb-4 bg-white border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{client.nome}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Telefone: {client.telefone}</p>
          <p>Email: {client.email}</p>
          <p>Gênero: {client.genero === 'M' ? 'Masculino' : 'Feminino'}</p>
          <div className="mt-4 space-x-2">
            <Button variant="outline">Editar</Button>
            <Button 
              variant="destructive"
              onClick={() => setClients(clients.filter(c => c.id !== client.id))}
            >
              Excluir
            </Button>
          </div>
        </CardContent>
      </Card>
    ))
  );

  // Componente de Lista de Serviços
  const ServiceListComponent = () => (
    services.map(service => (
      <Card key={service.id} className="mb-4 bg-white border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{service.nome}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Valor: R$ {service.valor.toFixed(2)}</p>
          <div className="mt-4 space-x-2">
            <Button variant="outline">Editar</Button>
            <Button 
              variant="destructive"
              onClick={() => setServices(services.filter(s => s.id !== service.id))}
            >
              Excluir
            </Button>
          </div>
        </CardContent>
      </Card>
    ))
  );

  // Renderização condicional baseada na tab ativa
  const renderContent = () => {
    if (activeTab === 'clients') {
      return (
        <Card className="bg-white p-4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Gerenciamento de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ClientForm />
            <div className="mt-8">
              <ClientListComponent />
            </div>
          </CardContent>
        </Card>
      );
    }
    return (
      <Card className="bg-white p-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Gerenciamento de Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <ServiceForm />
          <div className="mt-8">
            <ServiceListComponent />
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="mb-8 bg-gray-50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">World Beauty (WB)</CardTitle>
        </CardHeader>
      </Card>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <Button 
          className={`py-2 text-center rounded ${activeTab === 'clients' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('clients')}
        >
          Clientes
        </Button>
        <Button 
          className={`py-2 text-center rounded ${activeTab === 'services' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('services')}
        >
          Serviços
        </Button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ClientList;