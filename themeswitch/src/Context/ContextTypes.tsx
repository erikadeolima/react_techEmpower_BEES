export type Theme = 'light' | 'dark';

export type ContextType = {
  theme: string;
  setTheme: (theme: Theme) => void;
};

export const ContextDefultValues: ContextType = {
  theme: 'light',
  setTheme: () => {},
}