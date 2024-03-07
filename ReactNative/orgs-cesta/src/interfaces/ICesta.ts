interface ITopo  {
    titulo: string
};

interface IDetalhes  {
    nome: string,
    logo: any,
    nomeFazenda: string,
    descricao: string,
    preco: string,
};

interface ICesta  {
    topo: ITopo,
    detalhes: IDetalhes,
};

export { ITopo, IDetalhes, ICesta };