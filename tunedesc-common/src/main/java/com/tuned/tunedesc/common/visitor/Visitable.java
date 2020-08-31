package com.tuned.tunedesc.common.visitor;



public interface Visitable {


    void accept(BaseVisitor visitor);

    Object getVisitor();


}
