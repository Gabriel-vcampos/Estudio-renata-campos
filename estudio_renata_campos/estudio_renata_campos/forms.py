from django import forms

class NewsletterForm(forms.Form):
    email = forms.EmailField(
        required=True,
        label='Seu e-mail',
        max_length=100,
        widget=forms.EmailInput(
            attrs={
                'class': 'rounded-l-xl p-2 border-2 border-gray-300 w-96 outline-none',
                'placeholder': 'Digite seu e-mail'
            }
        )
    )

    # Validação estilo YUP
    def clean_email(self):
        email = self.cleaned_data.get('email')

        # Exemplo: bloqueando emails com domínio fake.com
        if email and email.endswith('@fake.com'):
            raise forms.ValidationError('Domínio de e-mail inválido.')

        return email
