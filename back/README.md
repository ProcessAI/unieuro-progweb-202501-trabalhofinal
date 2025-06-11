### Step 1: Create the Service File

Create a new file named `laudo-service.ts` in the `src/modules/laudo/service` directory.

```typescript
// filepath: /Users/danielzakhourjreige/Downloads/unieuro-progweb-202501-trabalhofinal-laudinho-5/back/src/modules/laudo/service/laudo-service.ts
import { Laudo } from '../models/laudo-model'; // Assuming you have a Laudo model defined

export const findAll = async (): Promise<Laudo[]> => {
  return await Laudo.find(); // Fetch all laudos from the database
};

export const findById = async (id: number): Promise<Laudo | null> => {
  return await Laudo.findById(id); // Fetch a laudo by ID
};

export const create = async (data: Partial<Laudo>): Promise<Laudo> => {
  const newLaudo = new Laudo(data);
  return await newLaudo.save(); // Save a new laudo to the database
};

export const update = async (id: number, data: Partial<Laudo>): Promise<Laudo | null> => {
  return await Laudo.findByIdAndUpdate(id, data, { new: true }); // Update a laudo by ID
};

export const deleteLaudo = async (id: number): Promise<void> => {
  await Laudo.findByIdAndDelete(id); // Delete a laudo by ID
};
```

### Step 2: Create the Routes File

Create a new file named `laudo-routes.ts` in the `src/modules/laudo/routes` directory.

```typescript
// filepath: /Users/danielzakhourjreige/Downloads/unieuro-progweb-202501-trabalhofinal-laudinho-5/back/src/modules/laudo/routes/laudo-routes.ts
import { Router, Request, Response } from 'express';
import {
  create,
  findAll,
  findById,
  update,
  deleteLaudo
} from '../service/laudo-service';

const router = Router();

// Listar todos os laudos
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const laudos = await findAll();
    res.json(laudos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar laudos' });
  }
});

// Buscar laudo por id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const laudo = await findById(id);
    if (!laudo) {
      res.status(404).json({ error: 'Laudo não encontrado' });
    } else {
      res.json(laudo);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar laudo' });
  }
});

// Criar novo laudo
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body; // Adjust according to your model
  try {
    const novoLaudo = await create({ title, description });
    res.status(201).json(novoLaudo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar laudo' });
  }
});

// Atualizar laudo pelo id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { title, description } = req.body; // Adjust according to your model
  try {
    const laudoAtualizado = await update(id, { title, description });
    if (!laudoAtualizado) {
      res.status(404).json({ error: 'Laudo não encontrado' });
    } else {
      res.json(laudoAtualizado);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar laudo' });
  }
});

// Deletar laudo pelo id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await deleteLaudo(id);
    res.json({ message: 'Laudo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar laudo' });
  }
});

export default router;
```

### Step 3: Create the Model

Assuming you are using Mongoose for MongoDB, create a model for `Laudo`. Create a new file named `laudo-model.ts` in the `src/modules/laudo/models` directory.

```typescript
// filepath: /Users/danielzakhourjreige/Downloads/unieuro-progweb-202501-trabalhofinal-laudinho-5/back/src/modules/laudo/models/laudo-model.ts
import { Schema, model } from 'mongoose';

const laudoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Laudo = model('Laudo', laudoSchema);
```

### Step 4: Integrate the Routes

Finally, integrate the new routes into your main application file (e.g., `app.ts` or `server.ts`).

```typescript
// Assuming you have an Express app setup
import express from 'express';
import laudoRoutes from './modules/laudo/routes/laudo-routes';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Use the laudo routes
app.use('/api/laudos', laudoRoutes);

// Other configurations...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Conclusion

You now have a complete CRUD backend for "laudos" that follows the established patterns in the backend of "tipoeq". Make sure to test your endpoints using a tool like Postman or Insomnia to ensure everything is working as expected. Adjust the model fields and request body as necessary to fit your application's requirements.