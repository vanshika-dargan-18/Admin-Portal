import { mount } from '@vue/test-utils';
import AddBulk from '@/components/common/AddBulk.vue';

describe('AddBulk.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AddBulk);
  });

  it('renders the AddBulk component correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.content').exists()).toBe(true);
    expect(wrapper.find('.empty-state').exists()).toBe(true);
  });

  it('disables the "Add User" button initially', () => {
    const button = wrapper.find('.add-user-btn');
    expect(button.attributes('disabled')).toBeDefined();
  });

  it('enables the "Add User" button when all fields are filled', async () => {
    const firstNameInput = wrapper.find('input[placeholder="First Name"]');
    const lastNameInput = wrapper.find('input[placeholder="Last Name"]');
    const emailInput = wrapper.find('input[type="email"]');
    const roleSelect = wrapper.find('select');
    const button = wrapper.find('.add-user-btn');

    await firstNameInput.setValue('John');
    await lastNameInput.setValue('Doe');
    await emailInput.setValue('john.doe@example.com');
    await roleSelect.setValue('user');

    expect(button.attributes('disabled')).toBeFalsy();
  });

  it('toggles the checkbox value when clicked', async () => {
    const checkbox = wrapper.find('#welcomeEmail');
    const initialChecked = checkbox.element.checked;

    await checkbox.setChecked();
    expect(checkbox.element.checked).toBe(!initialChecked);
  });

  it('displays the empty state message when no users are added', () => {
    const emptyStateText = wrapper.find('.empty-state p').text();
    expect(emptyStateText).toBe('You have not yet added any users');
  });
});
