<script setup lang="ts">
definePageMeta({ layout: 'admin' })

import { messagesService } from '~/modules/messages/service/messages.service'

const service = messagesService()
const fields = [
  { key: 'firstName', label: 'Nome', readonly: true },
  { key: 'lastName', label: 'Apelido', readonly: true },
  { key: 'email', label: 'Email', type: 'email', readonly: true },
  { key: 'subject', label: 'Assunto', readonly: true },
  { key: 'message', label: 'Mensagem', type: 'textarea', readonly: true },
  {
    key: 'status',
    label: 'Estado interno',
    type: 'select',
    filterable: true,
    options: [
      { value: 'new', label: 'Nova' },
      { value: 'read', label: 'Lida' },
      { value: 'archived', label: 'Arquivada' }
    ]
  },
  { key: 'createdAt', label: 'Recebida em', type: 'datetime-local', readonly: true, required: false }
]
</script>

<template>
  <CmsResourceManager
    :service="service"
    title="Mensagens"
    description="Pedidos enviados através do formulário de contacto do site. Área de consulta exclusiva da equipa interna."
    :fields="fields"
    :columns="['subject', 'email', 'status', 'createdAt']"
    publish-key="__sem_publicacao__"
    :allow-create="false"
    :allow-edit="true"
    :allow-delete="true"
    panel-note="Mensagens recebidas através do formulário público. Não são publicadas nem apresentadas no site."
    empty-text="Ainda não foram recebidas mensagens através do formulário de contacto."
  />
</template>
