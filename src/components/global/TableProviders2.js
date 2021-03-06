import React from 'react';
import { generate } from 'shortid';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';

const ListProviders = props =>
{
    const proveedorNuevo = { name: 'Nuevo Proveedor',
    city: 'Ciudad Perdida',
    location: 'Calle Falsa 123'};

    return (
        <div className="TableProviders">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Localidad</th>
                        <th>Direccion</th>
                    </tr>
                </thead>
                <tbody>
                    { props.providers.map(provider => 
                        <tr key={generate()}>
                            <td>{provider.name}</td>
                            <td>{provider.city}</td>
                            <td>{provider.location}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => props.addToProviders(proveedorNuevo)}>Agregar Proveedor</button>
            <button onClick={() => props.removeFromProviders(proveedorNuevo)}>Eliminar Proveedor</button>
            <button onClick={() => props.getProvider()}>Cargar proveedores</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (ListProviders);