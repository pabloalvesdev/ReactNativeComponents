export interface IMovement {
  Id: number;
  Title: string;
  Price: number;
  Profit: boolean;
  Recurrence: number | null;
  InitialDate: Date | null;
  FinalDate: Date | null;
  CategoryId: number;
  CategoryName: string;
}

// Unico
// {
//   Title: 'example',
//   Profit: true | false,
//   Price: 0,
//   Recurrence: null
// }

// Recorrente com Limite
// {
//   Title: 'example',
//   Profit: true | false,
//   Price: 0,
//   Recurrence: maior ou igual a 0,
//   InitDate: new Date(), Sempre o dia desta data será o dia da cobrança mensal
//   FinalDate: new Date()
// }

// Recorrente sem Limite {
//   Title: 'example',
//   Profit: true | false,
//   Recurrence: maior ou igual a 0,
//   InitDate: new Date(), Sempre o dia desta data será o dia da cobrança mensal
// }
