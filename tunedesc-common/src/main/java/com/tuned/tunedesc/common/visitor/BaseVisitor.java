package com.tuned.tunedesc.common.visitor;



public interface BaseVisitor<T,E>


{


    T visit(E e);



}
