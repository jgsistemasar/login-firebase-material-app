import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const LoadApp = () => {
  return (
    <AppTheme>
        <AppRouter />
    </AppTheme>
  )
}
