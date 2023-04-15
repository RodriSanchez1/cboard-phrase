import { describe, expect, test } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import RootPage from '../RootPage';

describe('RootPage test', () => {
  test('Should render', () => {
    render(<RootPage />);
    expect(screen.getByText(/Cboard Phrase/i)).toBeDefined();
  });
});
